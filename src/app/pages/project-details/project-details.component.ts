import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  projectDetails: any = [
    {
      projectName: 'FDXSSPSortUI',
      projectDuration: '2020/01 - 12/2020',
      projectDurationInMonths: '12',
      projectDescription:
        'FDXSSPSortUI is a continuation of FDXSortUI and the functional difference is some extra configuration management and process flow monitoring is specifically for primary hub stations. The actual application was based on applet programs which directly communicates with a Unix based C server through socket based connections. FDXSSPSortUI is a proposed system having a New UI in Angular 9 and Services in Java Spring Boot Server which will  directly interact with the Linux C Server.',
      rolesAndResponsibiltyAsA: 'Lead',
      rolesAndResponsibilty: [
        'Developing common component UI  creation and integrating functionalities using HTML5, Typescript, CSS, Bootstrap.',
        'Implementation and Integration of LDAP User authentication and authorization including JWT token implementation on both spring boot server side and Angular 9 UI',
        'Implementing socket programming for services in spring boot.',
        'Implementing controllers and service classes, request response models for services in spring boot.',
        'Leading the team for implementing functionality based on java applet code base.',
      ],
      platformsUsed: [
        'Web Browsers (IE, Chrome, Mozilla, Safari)',
        'Mobile Devices(iOS and Android devices)',
      ],
      languagesAndToolsUsed: ['HTML5', ' CSS', 'Angular 9', 'Spring boot-java'],
      idesAndOtherToolsUsed: [
        { tool: 'WebStorm', priority: 'low' },
        { tool: 'Visual Studio', priority: 'medium' },
        { tool: 'STS', priority: 'high' },
        { tool: 'PostMan', priority: 'medium' },
        { tool: 'Soap UI', priority: 'high' },
      ],
    },
    {
      projectName: 'FDXSortUI',
      projectDuration: '2018/01 - 2019/12',
      projectDurationInMonths: '12',
      rolesAndResponsibiltyAsA: 'Lead',
      projectDescription:
        'FDXSortUI is a real time web application for monitoring the process flow of and data management of a sortation hub where all the sorting process of items to be shipped to different locations across counties are happening. The actual application was based on applet programs which directly communicates with a Unix based C server through socket based connections. FDXSortUI is a proposed system having a New UI in Angular 7 and Services in Java Spring Boot Server which will  directly interact with the Linux C Server.',
      rolesAndResponsibilty: [
        'Developing common component UI  creation and integrating functionalities using HTML5, Typescript, CSS, Bootstrap.',
        'Implementation and Integration of LDAP User authentication and authorization including JWT token implementation on both spring boot server side and Angular 7 UI',
        'Implementing socket programming for services in spring boot.',
        'Implementing controllers and service classes, request response models for services in spring boot.',
        'Leading the team for implementing functionality based on java applet code base.',
      ],
      platformsUsed: [
        'Web Browsers (IE, Chrome, Mozilla, Safari)',
        'Mobile Devices(iOS and Android devices)',
      ],
      languagesAndToolsUsed: ['HTML5', ' CSS', 'Angular 7', 'Spring boot-java'],
      idesAndOtherToolsUsed: [
        { tool: 'WebStorm', priority: 'low' },
        { tool: 'Visual Studio', priority: 'medium' },
        { tool: 'STS', priority: 'high' },
        { tool: 'PostMan', priority: 'medium' },
        { tool: 'Soap UI', priority: 'high' },
      ],
    },
    {
      projectName: 'Mawani',
      projectDuration: '2016/04 - 2017/12',
      projectDurationInMonths: '8',
      projectDescription:
        'Mawani is a mobile Service Lane Technology application used for online booking and tracking of shipment details in ports in Dubai. This application provides facilities for Vessel registration, Vessel load/ Discharge summaries, Export status Etc.Mawani is a hybrid application developed using Ionic framework for both iOS and android devices.',
      rolesAndResponsibiltyAsA: 'Developer',
      rolesAndResponsibilty: [
        'Developing applications in Android and iOS mobile devices',
        'Creation of UI Using HTML, Typescript, SCSS, jQuery Implementation of web service calls.',
        'Integrating Plugins for File upload, Pdf creator, and Camera.',
      ],
      platformsUsed: [
        'Web Browsers (IE, Chrome, Mozilla, Safari)',
        'Mobile Devices(iOS and Android devices)',
      ],
      languagesAndToolsUsed: ['HTML5', ' CSS', 'Angular 2', 'jQuery'],
      idesAndOtherToolsUsed: [
        { tool: 'WebStorm', priority: 'high' },
        { tool: 'Android Studio', priority: 'high' },
        { tool: 'Xcode', priority: 'high' },
        { tool: 'Cordova', priority: 'low' },
        { tool: 'Ionic2', priority: 'high' },
      ],
    },
    {
      projectName: 'Elsa2GoPro',
      projectDuration: '2015/10 - 2016/04',
      projectDurationInMonths: '7',
      projectDescription:
        'Elsa2Go is a mobile Service Lane Technology application and is to make the vehicle repair process easier, enhance technician and service advisor toolset and increase process efficiency. This application is used for online customer service details tracking of vehicles like Volkswagen, And Audi using vehicle identification numbers in Barcode format or as Vin images. Elsa2Go is a hybrid application developed using the Ionic framework.',
      rolesAndResponsibiltyAsA: 'Developer',
      rolesAndResponsibilty: [
        'Developing application in Android and iOS mobile devices.',
        'Creation of UI Using HTML, Typescript, SCSS, jQuery Implementation of web service calls.',
        'Integrating Plugins for File upload, Pdf creator, and Camera.',
        'Print and Email PDF services.',
      ],
      platformsUsed: [
        'Web Browsers (IE, Chrome, Mozilla, Safari)',
        'Mobile Devices(iOS and Android devices)',
      ],
      languagesAndToolsUsed: [
        'HTML5',
        ' CSS',
        'Angular JS',
        'jQuery',
        'Javascript',
      ],
      idesAndOtherToolsUsed: [
        { tool: 'WebStorm', priority: 'high' },
        { tool: 'Android Studio', priority: 'high' },
        { tool: 'Xcode', priority: 'high' },
        { tool: 'Cordova', priority: 'low' },
        { tool: 'Ionic 1', priority: 'high' },
      ],
    },
    {
      projectName: 'AERO',
      projectDuration: '2014/03 - 2015/10',
      projectDurationInMonths: '7',
      projectDescription:
        'A Class C medical device used in the Diabetes domain, featuring an Android application running on customized OS and hardware. Multicomponent application consisting of 70+ components. This project is for monitoring the blood glucose level on the human body continuously using a CGM device and blood glucose test using BG strips.',
      rolesAndResponsibiltyAsA: 'Developer',
      rolesAndResponsibilty: [
        'Developing custom hardware components, data storage management and system configuration data settings.',
        'Implementation of BOLUS and BASAL related component o Creation of UI and implementation of corresponding activities.',
        'Components design and sequence design using Enterprise Architect.',
        'Creation and validation of design artefacts like HLD, LLD, Traceability matrix.',
        'Design of data store component o Design of Hardware Component, settings data store component.',
        'Design of BOLUS and BASAL related component.',
        'Design of time management module.',
      ],
      platformsUsed: ['Mobile Devices - Android'],
      languagesAndToolsUsed: ['Core Java'],
      idesAndOtherToolsUsed: [
        { tool: 'IntelliJ IDE', priority: 'high' },
        { tool: 'Android Studio', priority: 'high' },
        { tool: 'Eclipse', priority: 'high' },
        { tool: 'Find Bugs, Coverity', priority: 'low' },
        { tool: 'Check Style, PMD', priority: 'low' },
        { tool: 'Sqlite', priority: 'high' },
      ],
    },
    {
      projectName: 'VLEX App',
      projectDuration: '2012/12  - 2014/03',
      projectDurationInMonths: '16',
      projectDescription:
        'This project is based on class C medical devices for surgical and monitoring operations in the medical field. The DMC Client cross platform application is developed for windows and iOS platforms, which act as a remote server agent performs operations on medical device like software upgrade, service activation using activation keys, server communication to download suitable software package and showing notification new software package available, User Session management, Medical Device Communication using Wi-Fi, Ethernet cable Redpark Ethernet cables. Application manages the main operations like user session, device communication session, server communication session and device configuration management in a single application for the 4 types of medical devices used for surgical and monitoring operations.',
      rolesAndResponsibiltyAsA: 'Developer',
      rolesAndResponsibilty: [
        'Developing applications for Windows and iOS mobile devices',
        'Creation of UI Using HTML, JavaScript, CSS, and Web View Controller.',
        'Unit testing and integration testing using NUnit.',
        'Creation of Red Park Library using Xamarin Binding project.',
        'Implementation of Application and Medical Device Configuration.',
        'Implementation of Device Communication Protocols and Server Communication Protocols.',
        'Implementation of Network related components for Ethernet, Wi-Fi',
      ],
      platformsUsed: [
        'iPhone and iPad devices',
        'Windows System',
        'Mobile Devices - Android',
      ],
      languagesAndToolsUsed: [
        'C#',
        'Objective C',
        'HTML',
        'CSS',
        'JavaScript',
        'JQuery',
      ],
      idesAndOtherToolsUsed: [
        { tool: 'Xamarin', priority: 'high' },
        { tool: 'XCode', priority: 'medium' },
        { tool: 'Eclipse', priority: 'high' },
        { tool: 'Visual Studio', priority: 'medium' },
        { tool: 'Sqlite', priority: 'low' },
      ],
    },
  ];
}
