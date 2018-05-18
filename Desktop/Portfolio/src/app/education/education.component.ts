import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: object = [
    {
      'label': 'Master of Science in Informatics',
      'title': 'Technische Universität München (TUM)',
      'subtitle': 'Oct 2014 - June 2018',
      'content': [
        'Pursuing MSc Informatics at TUM with the major in Software Engineering. Expected graduation date: 15th July 2018.',
        'Gained theoritical and Practical experience in the field of Computer Science ' +
        '(Major - Software Engineering, Minors - Distributed System, Algorithms).'
      ],
      'lists': [
        {
          'title': 'Projects:',
          'content': [
            {
              'title': 'Linking (Manual and Automated) structured and unstructured data in Hybrid-wikis:',
              'content': 'Developing the application a part of my current Master Thesis. Creating dynamic links, similar to ' +
                'web annotations between two types of data (structure and unstructured).',
              'chips': ['HTML5', 'CSS3', 'Bootstrap 4', 'JavaScript', 'TypeScript', 'Angular 5', 'jQuery', 'SocioCortex', 'JSON', 'Webpack']
            },
            {
              'title': 'CookAtHome.com:',
              'content': 'Developed Proof of concept website as a part of Software Engineering for business ' +
                'application (SEBA) course.Functionalities Include create, search and edit the recipes, video and ' +
                'image aids for individual recipes and hire a chef facility.',
              'chips': ['HTML5', 'CSS3', 'Bootstrap3', 'AngularJS', 'Java Play Framework', 'Hibernate(ORM)', 'MySQL']
            },
            {
              'title': 'TUM International Bank:',
              'content': 'Secure Implementation of an online banking application. Have ' +
                'implemented various security features like CSRF Tokens, XSS and SQL-Injection prevention and ' +
                'user lockout mechanism to name a few.',
              'chips': ['HTML5', 'CSS3', 'JavaScript', 'PHP5', 'C', 'Java', 'Java Swings', 'MySQL']
            },
            {
              'title': 'Bosch Dots:',
              'content': 'B2B iOS application for Bosch Gmbh. Connecting Bosch with all their suppliers ' +
                'under a single platform where they can search, send business requests and interact with suppliers.',
              'chips': ['Swift 2.0', 'JSON', 'NodeJS', 'MongoDB']
            }
          ]
        }
      ]
    },
    {
      'label': 'Bachelor of Engineering in Computer Science',
      'title': 'Visvesvaraya Technological University, Bangalore (India)',
      'subtitle': 'Aug 2009 - Aug 2013',
      'content': [
        'Gained theoritical foundation of computer science and first practical experience into coding.'
      ],
      'lists': [
        {
          'title': 'Projects:',
          'content': [
            {
              'title': 'Data Compression techniques comparison tool (Bachelor Thesis):',
              'content': 'A tool that can be used for ' +
              'compression and decompression of data using various compression techniques. A tool that ' +
              'provides various options for the users, it provides for selection among different data compression ' +
              'techniques for compression or decompression of a file. Three different techniques are provided for ' +
              'text compression namely Huffman Coding, Arithmetic Coding, LZW and two techniques for image ' +
              'compression namely PCA (principle component analysis), Image quantization. Comparison of ' +
              'these techniques based on various parameters is also provided.',
              'chips': ['Java', 'Java Swings']
            },
            {
              'title': 'Graphical Simulation Of Nuclear Powerplant:',
              'content': 'Rendering the simulation of internal working of a' +
              'nuclear power plant and the internal fission reaction. It is well animated working of the nuclear ' +
              'reactor and three dimensional animation of the internal fission reaction',
              'chips': ['C', 'OpenGL']
            },
            {
              'title': 'Grow and Flip:',
              'content': 'Developed a very interactive UI control which provides Grow and Flip functionality. UI' +
              'control uses the mouse events to trigger each of these Grow and Flip functionalities.',
              'chips': ['HTML5', 'CSS3', 'JavaScript', 'jQuery']
            }
          ]
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
