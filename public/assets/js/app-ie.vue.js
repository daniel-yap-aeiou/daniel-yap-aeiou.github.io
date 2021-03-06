var navs = [
    { link: "#about", text: "About" },
    { link: "#experience", text: "Experience" },
    { link: "#voluntaryexperience", text: "Voluntary Experience" },
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
        return { navs: navs }
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
            var dateFrom = moment(new Date(2009, 03));
            var dateTo = moment(new Date(2011, 02));
            var months = dateTo.diff(dateFrom, 'months');
            var duration = moment.duration(months, 'months');
            var result = duration.format("y [years] M [months]");
            return "March 2009 - Feb 2011" + " (" + result + ")";
        },
        expDuration2: function () {
            var dateFrom = moment(new Date(2012, 07));
            var dateTo = moment(new Date(2013, 02));
            var months = dateTo.diff(dateFrom, 'months');
            var duration = moment.duration(months, 'months');
            var result = duration.format("y [years] M [months]");
            return "July 2012 - Feb 2013" + " (" + result + ")";
        },
        expDuration3: function () {
            var dateFrom = moment(new Date(2013, 02));
            var dateTo = moment(new Date(2015, 02));
            var months = dateTo.diff(dateFrom, 'months');
            var duration = moment.duration(months, 'months');
            var result = duration.format("y [years]");
            return "Feb 2013 - Feb 2015" + " (" + result + ")";
        },
        expDurationfour: function () {
            var dateFrom = moment(new Date(2015, 07));
            var dateTo = moment(new Date(2016, 05));
            var months = dateTo.diff(dateFrom, 'months');
            var duration = moment.duration(months, 'months');
            var result = duration.format("y [years] M [months]");
            return "July 2015 - May 2016" + " (" + result + ")";
        },
        expDuration5: function () {
            var dateFrom = moment(new Date(2016, 05));
            var dateTo = moment(new Date());
            var months = dateTo.diff(dateFrom, 'months');
            var duration = moment.duration(months, 'months');
            var result = duration.format("y [years] M [months]");
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
            var dateFrom = moment(new Date(2012, 04));
            var dateTo = moment(new Date(2017, 12));
            var months = dateTo.diff(dateFrom, 'months');
            var duration = moment.duration(months, 'months');
            var result = duration.format("y [years] M [months]");
            return "Apr 2012 - Dec 2017" + " (" + result + ")";
        },
        expDuration2: function () {
            var dateFrom = moment(new Date(2012, 04));
            var dateTo = moment(new Date(2012, 12));
            var months = dateTo.diff(dateFrom, 'months');
            var duration = moment.duration(months, 'months');
            var result = duration.format("y [years] M [months]");
            return "Apr 2012 - Dec 2012" + " (" + result + ")";
        },
        expDuration3: function () {
            var dateFrom = moment(new Date(2019, 01));
            var dateTo = moment(new Date());
            var months = dateTo.diff(dateFrom, 'months');
            var duration = moment.duration(months, 'months');
            var result = duration.format("y [years]");
            return "Jan 2019 - Present" + " (" + result + ")";
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
            var dateFrom = moment(new Date(1995, 01));
            var dateTo = moment(new Date(2000, 12));
            var months = dateTo.diff(dateFrom, 'months');
            var duration = moment.duration(months, 'months');
            var result = duration.format("y [years]");
            return "1995 - 2000" + " (" + result + ")";
        },
        eduDuration2: function () {
            var dateFrom = moment(new Date(2001, 01));
            var dateTo = moment(new Date(2005, 12));
            var months = dateTo.diff(dateFrom, 'months');
            var duration = moment.duration(months, 'months');
            var result = duration.format("y [years]");
            return "2001 - 2005" + " (" + result + ")";
        },
        eduDuration3: function () {
            var dateFrom = moment(new Date(2006, 01));
            var dateTo = moment(new Date(2006, 12));
            var months = dateTo.diff(dateFrom, 'months');
            var duration = moment.duration(months, 'months');
            var result = duration.format("y [years]");
            return "2006 - 2006" + " (" + result + ")";
        },
        eduDurationfour: function () {
            var dateFrom = moment(new Date(2007, 01));
            var dateTo = moment(new Date(2011, 12));
            var months = dateTo.diff(dateFrom, 'months');
            var duration = moment.duration(months, 'months');
            var result = duration.format("y [years]");
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
        var vm = this;
        vm.drawSkillTable();
    },
    methods: {
        drawSkillTable: function () {
            var vm = this;
            google.charts.load('current', { 'packages': ['table'] });
            google.charts.setOnLoadCallback(vm.drawTable);

        },
        drawTable: function () {
            var data = new google.visualization.DataTable();
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

            var table = new google.visualization.Table(document.getElementById('table_div'));

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
        var vm = this;
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
            var star = $('#inputGroupSelect04').val();

            if (star === '') {
                $('#inputGroupSelect04').css('border', 'solid #3670b5 2px');
                $("#newHoroscope").html('');
                return;
            }

            $('#inputGroupSelect04').css('border', '1px solid #ced4da');
            $('#loader').show();

            if (browser === "ie" && ieVersion && ieVersion === 9) {
                $.support.cors = true;
                $.ajax({
                    type: 'POST',
                    url: 'https://aztro.sameerkumar.website?sign=' + star + '&day=today',
                    crossDomain: true,
                    cache: false,
                    forceMethod: true,
                    forceContentType: true,
                    success: function (result) {
                        console.log(result);
                        $("#newHoroscope").html(result.description);
                        $('#loader').hide();
                    }
                });

                // var xhr = new XDomainRequest();
                // xhr.open('POST', 'https://aztro.sameerkumar.website?sign=' + star + '&day=today');
                // //xhr.setRequestHeader('Content-Type', 'application/json');
                // xhr.onload = function () {
                //     if (xhr.status === 200) {
                //         var json = JSON.parse(xhr.responseText);
                //         $("#newHoroscope").html(json.description);
                //         $('#loader').hide();
                //     }

                //     $('#loader').hide();
                // };
                // xhr.send();

            }
            else {
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
}

var joke = {
    template: '#joke-template',
    data: function () {
        return {}
    },
    created: function () {
        var vm = this;
        vm.getJoke();
    },
    methods: {
        getJoke: function () {
            $('#loader2').show();

            if (browser === "ie" && ieVersion && ieVersion === 9) {
                $.support.cors = true;
                $.ajax({
                    type: 'GET',
                    url: 'https://icanhazdadjoke.com/',
                    contentType: 'application/json',
                    crossDomain: true,
                    dataType: 'json',
                    cache: false,
                    forceMethod: true,
                    forceContentType: true,
                    success: function (result) {
                        console.log(result);
                        $("#newJoke").html(result.joke);
                        $('#loader2').hide();
                    }
                });

                // var xhr = new XDomainRequest();
                // xhr.open('GET', 'https://icanhazdadjoke.com/');
                // //xhr.setRequestHeader('Content-Type', 'application/json');
                // xhr.onload = function () {
                //     if (xhr.status === 200) {
                //         var htmlTXT = xhr.responseText;
                //         var div = window.document.createElement('div');
                //         div.innerHTML = htmlTXT.replace(/<script(.|\s)*?\/script>/g, '');;

                //         var list = div.getElementsByTagName('meta');
                //         $.each(list, function (k, v) {
                //             if ($(v).attr('name')) {
                //                 if ($(v).attr('name').indexOf("description") !== -1) {
                //                     var joke = $(v).attr('content');
                //                     $("#newJoke").html(joke);
                //                     $('#loader2').hide();
                //                     return;
                //                 }
                //             }
                //         });
                //     }

                //     $('#loader2').hide();
                // };
                //xhr.send();
            }
            else {
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

}

var vvideo = {
    template: '#video-template',
    data: function () {
        return {}
    },
    methods: {}
}

new Vue({
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
        var vm = this;
        setInterval(function () { vm.changeImageProfile(); }, 3600);
        setInterval(function () { vm.changeImageEmoji(); }, 1000);
    },
    mounted: function () {

        try {
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
        }
        catch (error) {
        }
    },
    methods: {
        getRandomNumber: function () {
            var vm = this;
            var random = Math.floor((Math.random() * vm.colors.length) + 1);
            return random;
        },
        changePrimaryColor: function () {
            var vm = this;
            var random = vm.getRandomNumber();

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
            var vm = this;

            if (vm.emojiCounter === 46)
                vm.emojiCounter = 1;

            $(".img-emoji").attr('src', 'assets/emoji/' + vm.emojiCounter++ + '.png');
        },
        changeImageProfile: function () {
            var vm = this;

            if (vm.imageProfileCounter == vm.profileImages.length + 1)
                vm.imageProfileCounter = 0;

            $(".img-profile").attr('src', vm.profileImages[vm.imageProfileCounter++]);
        }
    }
});

