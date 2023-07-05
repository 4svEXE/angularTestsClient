import { Component } from '@angular/core';
import { SettingsWidgetService } from 'src/app/services/settings-widget.service';


@Component({
  selector: 'app-settings-widget',
  templateUrl: './settings-widget.component.html',
  styleUrls: ['./settings-widget.component.scss']
})
export class SettingsWidgetComponent {
  config: ConfigType = {
    testSize: 20,
    difficulty: 1,
    rightAnswers: 0
  }

  constructor(private settingsWidgetService: SettingsWidgetService){}

  ngOnInit(): void {};

  sendSettings(settings: any): void {
    this.settingsWidgetService.sendSettings(settings);
  }

  setTestSize(testSize: number): void {
    this.config.testSize = testSize
    this.sendSettings(this.config)
  }

  setDifficulty(difficulty: number): void {
    this.config.difficulty = difficulty;
    this.sendSettings(this.config)
  }

  setRightAnswer(): void {
    this.config.rightAnswers++
    this.sendSettings(this.config)
  }
}

type ConfigType = {
  testSize: number, // 10,15,20
  difficulty: number // 1,2,3
  rightAnswers: number // 0-20
}