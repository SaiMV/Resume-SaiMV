import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.css'],
})
export class ExperienceDetailsComponent {
  skills: any = [
    {
      mainSkill: 'FrontEnd',
      skillSet: [
        { skillName: 'HTML5', totalYears: 9, percentage: 90 },
        { skillName: 'CSS3', totalYears: 9, percentage: 90 },
        { skillName: 'Bootstrap', totalYears: 9, percentage: 90 },
        { skillName: 'Javascript', totalYears: 9, percentage: 90 },
        { skillName: 'Jquery', totalYears: 2, percentage: 50 },
        { skillName: 'Agnular 1', totalYears: 1, percentage: 50 },
        { skillName: 'Agnular 2 - 11', totalYears: 7, percentage: 90 },
        { skillName: 'Ionic 2, 3', totalYears: 4, percentage: 90 },
      ],
    },
    {
      mainSkill: 'Other - Xamarin, Android, Spring Boot',
      skillSet: [
        { skillName: '.net C#', totalYears: 3, percentage: 80 },
        { skillName: 'SQL', totalYears: 3, percentage: 80 },
        { skillName: 'Java', totalYears: 9, percentage: 70 },
        { skillName: 'SQLLite', totalYears: 3, percentage: 50 },
        { skillName: 'JDBC', totalYears: 3, percentage: 50 },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  getTransform(percentage: number) {
    if (percentage > 0 && percentage < 100) {
      // console.log((percentage/10) * 40)
      const ratting = percentage * 2;
      return 'rotate(' + ratting + 'deg)';
    } else {
      return 'rotate(220deg)';
    }
  }
}
