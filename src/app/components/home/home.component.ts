import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import * as moment from 'moment';

interface Education {
  duration: {
    from: string;
    to: string;
  };
  title: string;
  score: string;
  board: string;
  description: string;
}
interface Experience {
  duration: {
    from: string;
    to: string;
  };
  title: string;
  company: string;
  description: string;
}
interface Skill {
  icon_path: string,
  title: string,
  rating: number,
  experience: {
    start_date: moment.Moment;
    years?: number;
    months?: number;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  educations: Education[] = [
    {
      duration: {
        from: 'Apr 2010',
        to: 'Mar 2011'
      },
      title: 'Class X - AISSE',
      score: '9.8/10.0',
      board: 'CBSE',
      description: 'Distinction in all subjects, 10/10 in Mathematics.'
    },
    {
      duration: {
        from: 'Apr 2012',
        to: 'Mar 2013'
      },
      title: 'Class XII - AISSCE',
      score: '92.2%',
      board: 'CBSE',
      description: 'Distinction in all subjects, 87% in Mathematics, 96% in Comp. Sc.'
    },
    {
      duration: {
        from: 'Aug 2013',
        to: 'Jun 2017'
      },
      title: 'B.E. in Computer Science and Engineering',
      score: '69%',
      board: 'VTU',
      description: '94% in Mathematics in 4th semester.'
    }
  ]
  experiences: Experience[] = [
    {
      duration: {
        from: 'Jan 2015',
        to: 'Feb 2015'
      },
      title: 'Software Engineering Intern',
      company: 'Bharat Heavy Electricals Limited',
      description: 'Website Development and Web Technologies such as HTML/HTML5, CSS, JS, jQuery, Bootstrap.'
    },
    {
      duration: {
        from: 'Jul 2015',
        to: 'Aug 2015'
      },
      title: 'Software Engineering Intern',
      company: 'Bharat Heavy Electricals Limited',
      description: 'ASP.Net and Oracle Database based Web Applications.'
    }, {
      duration: {
        from: 'Jan 2017',
        to: 'Sep 2017'
      },
      title: 'Software Engineering Intern',
      company: 'Plankton Solutions Pvt. Ltd.',
      description: 'Web Applications using Angular JS (1.x), Angular Material (1.x), etc.'
    }, {
      duration: {
        from: 'Oct 2017',
        to: 'May 2019'
      },
      title: 'Software Engineer (Front End)',
      company: 'Plankton Solutions Pvt. Ltd.',
      description: 'Web Technologies such as Angular (7.x), Angular Material (2.x), Node JS, etc.'
    }, {
      duration: {
        from: 'May 2019',
        to: 'Present'
      },
      title: 'Software Engineer (Full Stack)',
      company: 'Soroco India Pvt. Ltd.',
      description: 'Web Technologies such as Angular (7.x), Angular Material (2.x), Node JS, etc.'
    }
  ]
  skillsets: Skill[] = [
    {
      icon_path: 'assets/images/icons/html5.min.png',
      title: 'HTML 5',
      rating: 8,
      experience: {
        start_date: moment([2015, 0, 1])
      }
    },
    {
      icon_path: 'assets/images/icons/css3.min.png',
      title: 'CSS 3',
      rating: 7,
      experience: {
        start_date: moment([2015, 0, 1])
      }
    },
    {
      icon_path: 'assets/images/icons/javascript.min.png',
      title: 'Javascript',
      rating: 8,
      experience: {
        start_date: moment([2015, 0, 1])
      }
    },
    {
      icon_path: 'assets/images/icons/angular-js.min.png',
      title: 'Angular JS (1.x)',
      rating: 6,
      experience: {
        start_date: moment([2017, 0, 1])
      }
    },
    {
      icon_path: 'assets/images/icons/angular-material.min.png',
      title: 'Angular (2.x+)',
      rating: 7,
      experience: {
        start_date: moment([2017, 10, 1])
      }
    },
    {
      icon_path: 'assets/images/icons/angular-material.min.png',
      title: 'Angular Material',
      rating: 8,
      experience: {
        start_date: moment([2017, 0, 1])
      }
    },
    {
      icon_path: 'assets/images/icons/nodejs.min.png',
      title: 'Node JS',
      rating: 8,
      experience: {
        start_date: moment([2017, 10, 1])
      }
    },
    {
      icon_path: 'assets/images/icons/bootstrap.min.png',
      title: 'Twitter Bootstrap',
      rating: 5,
      experience: {
        start_date: moment([2016, 10, 1])
      }
    },
    {
      icon_path: 'assets/images/icons/w3css.min.png',
      title: 'W3 CSS',
      rating: 10,
      experience: {
        start_date: moment([2015, 5, 1])
      }
    },
    {
      icon_path: 'assets/images/icons/jquery.min.png',
      title: 'jQuery',
      rating: 6,
      experience: {
        start_date: moment([2015, 5, 1])
      }
    },
    {
      icon_path: 'assets/images/icons/ibm-watson.min.png',
      title: 'IBM Watson Assistant',
      rating: 7,
      experience: {
        start_date: moment([2018, 10, 1])
      }
    },
    {
      icon_path: 'assets/images/icons/database.min.png',
      title: 'Relational Datbase',
      rating: 7,
      experience: {
        start_date: moment([2016, 5, 1])
      }
    }
  ]

  constructor() { }

  ngOnInit() {
    window.onscroll = () => {
      let navbar = document.getElementById("top-navbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add('w3-white');
        navbar.classList.add('w3-card');
      } else {
        navbar.classList.remove('w3-white');
        navbar.classList.remove('w3-card');
      }
    }

    this.calcExperience();
  }

  calcExperience(): void {
    let today = moment();
    for (let skill of this.skillsets) {
      skill.experience.years = today.diff(skill.experience.start_date, 'years');
      skill.experience.months = today.diff(skill.experience.start_date, 'months') - skill.experience.years * 12;
    }
  }

  redirectTo(path: string, delay: number = 0): void {
    setTimeout(() => {
      window.location.href = path;
    }, delay);
  }

  scrollTo(id: string): void {
    $('html,body').animate({
      scrollTop: $(id).offset().top - 53
    }, 'slow');
  }

  createRange(max: number, min: number = 0): number[] {
    let arr: number[] = [];
    for (let i = min; i < max; i++) {
      arr.push(i);
    }
    return arr;
  }

  stringify(obj: any): string {
    if (typeof obj == "object")
      return JSON.stringify(obj);
    return obj;
  }
}
