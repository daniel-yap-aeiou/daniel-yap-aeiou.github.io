const navs1 = [
    { link: "#about", text: "About" },
    { link: "#experience", text: "Experience" },
    { link: "#voluntaryexperience", text: "Voluntary Work" },
    { link: "#education", text: "Education" },
    { link: "#skills", text: "Skills" },
    { link: "#interests", text: "Interests" },
    { link: "#randombibleverse", text: "A Random Bible Verse" },
    { link: "#horoscope", text: "Horoscope" },
    { link: "#joke", text: "A Joke" },
    { link: "#vvideo", text: "A Video" }
];


var navLink = {
    template: '#nav-link-template',
    data: function () {
        return {
            navs: navs1
        }
    },
    methods: {}
};

var about = {
    template: '#about-template',
    data: function () {
        return {}
    },
    methods: {}
}

var experience = {
    template: '#experience-template',
    data: function () {
        return {}
    },
    computed: {
        expDuration1: function () {
            let dateFrom = moment(new Date(2009, 03));
            let dateTo = moment(new Date(2011, 02));
            let months = dateTo.diff(dateFrom, 'months');
            let duration = moment.duration(months, 'months');
            let result = duration.format("y [years] M [months]");
            return "March 2009 - Feb 2011" + " (" + result + ")";
        },
        expDuration2: function () {
            let dateFrom = moment(new Date(2012, 07));
            let dateTo = moment(new Date(2013, 02));
            let months = dateTo.diff(dateFrom, 'months');
            let duration = moment.duration(months, 'months');
            let result = duration.format("y [years] M [months]");
            return "July 2012 - Feb 2013" + " (" + result + ")";
        },
        expDuration3: function () {
            let dateFrom = moment(new Date(2013, 02));
            let dateTo = moment(new Date(2015, 02));
            let months = dateTo.diff(dateFrom, 'months');
            let duration = moment.duration(months, 'months');
            let result = duration.format("y [years]");
            return "Feb 2013 - Feb 2015" + " (" + result + ")";
        },
        expDurationfour: function () {
            let dateFrom = moment(new Date(2015, 07));
            let dateTo = moment(new Date(2016, 05));
            let months = dateTo.diff(dateFrom, 'months');
            let duration = moment.duration(months, 'months');
            let result = duration.format("y [years] M [months]");
            return "July 2015 - May 2016" + " (" + result + ")";
        },
        expDuration5: function () {
            let dateFrom = moment(new Date(2016, 05));
            let dateTo = moment(new Date());
            let months = dateTo.diff(dateFrom, 'months');
            let duration = moment.duration(months, 'months');
            let result = duration.format("y [years] M [months]");
            return "May 2016 - Present" + " (" + result + ")";
        }
    },
    methods: {}
}

var voluntaryExperience = {
    template: '#voluntary-experience-template',
    data: function () {
        return {}
    },
    computed: {
        expDuration1: function () {
            let dateFrom = moment(new Date(2012, 04));
            let dateTo = moment(new Date(2017, 12));
            let months = dateTo.diff(dateFrom, 'months');
            let duration = moment.duration(months, 'months');
            let result = duration.format("y [years] M [months]");
            return "Apr 2012 - Dec 2017" + " (" + result + ")";
        },
        expDuration2: function () {
            let dateFrom = moment(new Date(2012, 04));
            let dateTo = moment(new Date(2012, 12));
            let months = dateTo.diff(dateFrom, 'months');
            let duration = moment.duration(months, 'months');
            let result = duration.format("y [years] M [months]");
            return "Apr 2012 - Dec 2012" + " (" + result + ")";
        },
        expDuration3: function () {
            let dateFrom = moment(new Date(2019, 01));
            let dateTo = moment(new Date(2020, 01));
            let months = dateTo.diff(dateFrom, 'months');
            let duration = moment.duration(months, 'months');
            let result = duration.format("y [years]");
            return "Jan 2019 - Jan 2020" + " (" + result + ")";
        },
    },
    methods: {}
}

var education = {
    template: '#education-template',
    data: function () {
        return {}
    },
    computed: {
        eduDuration1: function () {
            let dateFrom = moment(new Date(1995, 01));
            let dateTo = moment(new Date(2000, 12));
            let months = dateTo.diff(dateFrom, 'months');
            let duration = moment.duration(months, 'months');
            let result = duration.format("y [years]");
            return "1995 - 2000" + " (" + result + ")";
        },
        eduDuration2: function () {
            let dateFrom = moment(new Date(2001, 01));
            let dateTo = moment(new Date(2005, 12));
            let months = dateTo.diff(dateFrom, 'months');
            let duration = moment.duration(months, 'months');
            let result = duration.format("y [years]");
            return "2001 - 2005" + " (" + result + ")";
        },
        eduDuration3: function () {
            let dateFrom = moment(new Date(2006, 01));
            let dateTo = moment(new Date(2006, 12));
            let months = dateTo.diff(dateFrom, 'months');
            let duration = moment.duration(months, 'months');
            let result = duration.format("y [years]");
            return "2006 - 2006" + " (" + result + ")";
        },
        eduDurationfour: function () {
            let dateFrom = moment(new Date(2007, 01));
            let dateTo = moment(new Date(2011, 12));
            let months = dateTo.diff(dateFrom, 'months');
            let duration = moment.duration(months, 'months');
            let result = duration.format("y [years]");
            return "2007 - 2011" + " (" + result + ")";
        },
    },
    methods: {}
}

var skills = {
    template: '#skills-template',
    data: function () {
        return {}
    },
    created: function () {
        let vm = this;
        vm.drawSkillTable();
    },
    methods: {
        drawSkillTable: function () {
            let vm = this;
            google.charts.load('current', { 'packages': ['table'] });
            google.charts.setOnLoadCallback(vm.drawTable);

        },
        drawTable: function () {
            let data = new google.visualization.DataTable();
            data.addColumn('string', 'Programming Languages');
            data.addColumn('number', 'Confidence Level');
            //data.addColumn('boolean', 'Full Time Employee');
            data.addRows([
                ['C# (ASP.NET MVC, .NET Core MVC, WebAPI)', { v: 80, f: '80%' }],
                ['Javascript (Typescript, ReactJs, AngularJs, VueJs)', { v: 80, f: '80%' }],
                ['HTML/CSS', { v: 80, f: '80%' }],
                ['SQL/MySQL', { v: 80, f: '80%' }],
                ['NoSQL', { v: 70, f: '75%' }]
            ]);

            let table = new google.visualization.Table(document.getElementById('table_div'));

            table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
        },
    }
}

var interest = {
    template: '#interest-template',
    data: function () {
        return {}
    },
    methods: {}
}

var randombibleverse = {
    template: '#randombibleverse-template',
    data: function () {
        return {}
    },
    created: function () {
        let vm = this;
        vm.getRandomVerse();
    },
    methods: {
        getRandomVerse: function () {
            $('#loader3').show();

            $.ajax({
                url: "https://labs.bible.org/api/?passage=random&type=json&callback=myCallback",
                crossDomain: true,
                dataType: 'jsonp',
                cache: false,
                success: function (result) {
                    var cleanText = result[0].text.replace(/<\/?[^>]+(>|$)/g, "");
                    //cleanText = cleanText.substring(0, cleanText.length - 9);

                    $("#newRandomVerse")
                        .html('<strong>' +
                            result[0].bookname +
                            ' ' + result[0].chapter +
                            ':' + result[0].verse +
                            '</strong> ' +
                            cleanText);

                    $('#loader3').hide();
                }
            });
        },
    }
}

var horoscope = {
    template: '#horoscope-template',
    data: function () {
        return {}
    },
    methods: {
        getHoroscope: function () {
            let star = $('#inputGroupSelect04').val();

            if (star === '') {
                $('#inputGroupSelect04').css('border', 'solid #3670b5 2px');
                $("#newHoroscope").html('');
                return;
            }

            $('#inputGroupSelect04').css('border', '1px solid #ced4da');
            $('#loader').show();

            $.ajax({
                type: 'POST',
                url: 'https://aztro.sameerkumar.website?sign=' + star + '&day=today',
                cache: false,
                success: function (result) {

                    $("#newHoroscope").html(result.description);
                    $('#loader').hide();
                }
            });
        }
    }
}

var joke = {
    template: '#joke-template',
    data: function () {
        return {}
    },
    created: function () {
        let vm = this;
        vm.getJoke();
    },
    methods: {
        getJoke: function () {
            $('#loader2').show();

            $.ajax({
                url: "https://icanhazdadjoke.com/",
                crossDomain: true,
                dataType: 'json',
                cache: false,
                success: function (result) {
                    $("#newJoke").html(result.joke);
                    $('#loader2').hide();
                }
            });
        }
    }

}

var vvideo = {
    template: '#video-template',
    data: function () {
        return {}
    },
    methods: {}
}

function isCrappyIE() {
    var ua = window.navigator.userAgent;
    var crappyIE = false;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {// IE 10 or older => return version number        
        crappyIE = true;
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {// IE 11 => return version number        
        crappyIE = true;
    }
    return crappyIE;
}

if (!isCrappyIE()) {

    const app = {
        el: '#resume-app',
        components: {
            'nav-link': navLink,
            'about': about,
            'experience': experience,
            'voluntary-experience': voluntaryExperience,
            'education': education,
            'skills': skills,
            'interest': interest,
            'randombibleverse': randombibleverse,
            'horoscope': horoscope,
            'joke': joke,
            'vvideo': vvideo
        },
        data: function () {
            return {
                message: 'This is my resume',
                existingColor: '',
                colors: ["black",
                    // google color code
                    "#4285F4", "#34A853", "#FBBC05", "#EA4335",
                    // rainbow
                    "#ff2400", "#e81d1d", "#e8b71d", "#e3e81d", "#1de840", "#1ddde8", "#2b1de8", "#dd00f3", "#dd00f3"
                ],
                emojiCounter: 1,
                profileImages: ["assets/malaysia.gif", "assets/australia.gif", "assets/takoyaki.gif"],
                imageProfileCounter: 0,
            }
        },
        created: function () {
            let vm = this;
            setInterval(function () { vm.changeImageProfile(); }, 3600);
            setInterval(function () { vm.changeImageEmoji(); }, 1000);
        },
        mounted: function () {
            $('[data-toggle="tooltip"]').tooltip();
			
			/* animation */
			$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				  if (target.length) {
					$('html, body').animate({
					  scrollTop: (target.offset().top)
					}, 1000, "easeInOutExpo");
					return false;
				  }
				}
			  });

			  // Closes responsive menu when a scroll trigger link is clicked
			  $('.js-scroll-trigger').click(function() {
				$('.navbar-collapse').collapse('hide');
			  });

			  // Activate scrollspy to add active class to navbar items on scroll
			  $('body').scrollspy({
				target: '#sideNav'
			  });
        },
        methods: {
            getRandomNumber: function () {
                let vm = this;
                let random = Math.floor((Math.random() * vm.colors.length) + 1);
                return random;
            },
            changePrimaryColor: function () {
                let vm = this;
                let random = vm.getRandomNumber();

                if (vm.existingColor === vm.colors[random]) {
                    if (random === vm.colors.length)
                        random = 0;
                    else
                        random += 1;
                }

                //$(".bg-primary").attr('style', 'background-color: ' + colors[random] + ' !important;');
                $(".text-primary").attr('style', 'color: ' + vm.colors[random] + ' !important;');
            },
            changeImageEmoji: function () {
                let vm = this;

                if (vm.emojiCounter === 46)
                    vm.emojiCounter = 1;

                $(".img-emoji").attr('src', 'assets/emoji/' + vm.emojiCounter++ + '.png');
            },
            changeImageProfile: function () {
                let vm = this;

                if (vm.imageProfileCounter == vm.profileImages.length + 1)
                    vm.imageProfileCounter = 0;

                $(".img-profile").attr('src', vm.profileImages[vm.imageProfileCounter++]);
            }
        }
    };

	Vue.createApp(app).mount('#resume-app')
	
}
