import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
})
export class PersonalDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  personalAndEducationalDetails: any = {
    address: [
      'Mundapurath Madhavi Nivas House Chulliparamb',
      'FarookCollege PO',
      'Calicut Kerala',
      'Inida – 673632',
    ],
    phone: ['+918086046407', '+918593939224'],
    Email: 'saimv09@gmail.com',
    DOB: '13-10-1990',
    Languages: [' English', 'Malayalam (Mother Tounge)', 'Tamil', 'Hindi'],
    Education: [
      {
        course: 'M.Tech Computer Application',
        university: 'Bits Pilani. Rajasthan',
      },
      {
        course: 'BSc. Computer Science',
        university: 'College Of Applied Science, Vazhakkad',
      },
      {
        course: 'Higher Secondary',
        university: 'IHRD Higher Secondary School Vazhakkad',
      },
      {
        course: 'SSLC',
        university: 'Sevamandiram Post Basic School Ramanattukara',
      },
    ],
  };
}
