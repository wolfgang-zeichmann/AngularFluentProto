import { Component, OnInit } from '@angular/core';
import { 
  provideFluentDesignSystem, 
  fluentButton, 
  fluentCard,
  fluentTextField,
  fluentCheckbox,
  fluentRadio,
  fluentRadioGroup,
  fluentSelect,
  fluentOption,
  fluentSlider,
  fluentSwitch,
  fluentProgressRing,
  fluentBadge,
  fluentDivider,
  fluentAccordion,
  fluentAccordionItem
} from '@fluentui/web-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Fluent UI Web Components Demo';
  
  textValue = '';
  isChecked = false;
  radioValue = 'option1';
  selectValue = 'apple';
  sliderValue = 50;
  switchValue = false;
  exampleTextField = 'Initial Value';

  ngOnInit(): void {
    // Register Fluent UI Web Components
    provideFluentDesignSystem()
      .register(
        fluentButton(),
        fluentCard(),
        fluentTextField(),
        fluentCheckbox(),
        fluentRadio(),
        fluentRadioGroup(),
        fluentSelect(),
        fluentOption(),
        fluentSlider(),
        fluentSwitch(),
        fluentProgressRing(),
        fluentBadge(),
        fluentDivider(),
        fluentAccordion(),
        fluentAccordionItem()
      );
  }

  onButtonClick(): void {
    alert('Fluent UI Button clicked!');
  }

  onTextChange(event: any): void {
    this.textValue = event.target.value;
  }

  onTextFieldChange(event: any): void {
    this.exampleTextField = event.target.value;
  }

  onCheckboxChange(event: any): void {
    this.isChecked = event.target.checked;
  }

  onRadioChange(event: any): void {
    this.radioValue = event.target.value;
  }

  onSelectChange(event: any): void {
    this.selectValue = event.target.value;
  }

  onSliderChange(event: any): void {
    this.sliderValue = event.target.value;
  }

  onSwitchChange(event: any): void {
    this.switchValue = event.target.checked;
  }
}