new Vue({
    el: "#app",
    data() {
        return {
            audio: null,
            circleLeft: null,
            barWidth: null,
            duration: null,
            currentTime: null,
            isTimerPlaying: false,
            microAs: [{
                    name: "Mekanın Sahibi",
                    M_App: "Norm Ender",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/img/1.jpg",
                    source: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/mp3/1.mp3",
                    url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
                    favorited: false
                },
                {
                    name: "Everybody Knows",
                    M_App: "Leonard Cohen",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/img/2.jpg",
                    source: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/mp3/2.mp3",
                    url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
                    favorited: true
                },
                {
                    name: "Extreme Ways",
                    M_App: "Moby",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/img/3.jpg",
                    source: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/mp3/3.mp3",
                    url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
                    favorited: false
                },
                {
                    name: "Butterflies",
                    M_App: "Sia",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/img/4.jpg",
                    source: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/mp3/4.mp3",
                    url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
                    favorited: false
                },
                {
                    name: "The Final Victory",
                    M_App: "Haggard",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/img/5.jpg",
                    source: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/mp3/5.mp3",
                    url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
                    favorited: true
                },
                {
                    name: "Genius ft. Sia, Diplo, Labrinth",
                    M_App: "LSD",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/img/6.jpg",
                    source: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/mp3/6.mp3",
                    url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
                    favorited: false
                },
                {
                    name: "The Comeback Kid",
                    M_App: "Lindi Ortega",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/img/7.jpg",
                    source: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/mp3/7.mp3",
                    url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
                    favorited: true
                },
                {
                    name: "Overdose",
                    M_App: "Grandson",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/img/8.jpg",
                    source: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/mp3/8.mp3",
                    url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
                    favorited: false
                },
                {
                    name: "Rag'n'Bone Man",
                    M_App: "Human",
                    cover: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/img/9.jpg",
                    source: "https://raw.githubusercontent.com/muhammederdem/mini-micro_app/master/mp3/9.mp3",
                    url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
                    favorited: false
                }
            ],
            currentMicroA: null,
            currentMicroAIndex: 0,
            transitionName: null
        };
    },
    methods: {
        play() {
            if (this.audio.paused) {
                this.audio.play();
                this.isTimerPlaying = true;
            } else {
                this.audio.pause();
                this.isTimerPlaying = false;
            }
        },
        generateTime() {
            let width = (100 / this.audio.duration) * this.audio.currentTime;
            this.barWidth = width + "%";
            this.circleLeft = width + "%";
            let durmin = Math.floor(this.audio.duration / 60);
            let dursec = Math.floor(this.audio.duration - durmin * 60);
            let curmin = Math.floor(this.audio.currentTime / 60);
            let cursec = Math.floor(this.audio.currentTime - curmin * 60);
            if (durmin < 10) {
                durmin = "0" + durmin;
            }
            if (dursec < 10) {
                dursec = "0" + dursec;
            }
            if (curmin < 10) {
                curmin = "0" + curmin;
            }
            if (cursec < 10) {
                cursec = "0" + cursec;
            }
            this.duration = durmin + ":" + dursec;
            this.currentTime = curmin + ":" + cursec;
        },
        updateBar(x) {
            let progress = this.$refs.progress;
            let maxduration = this.audio.duration;
            let position = x - progress.offsetLeft;
            let percentage = (100 * position) / progress.offsetWidth;
            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }
            this.barWidth = percentage + "%";
            this.circleLeft = percentage + "%";
            this.audio.currentTime = (maxduration * percentage) / 100;
            this.audio.play();
        },
        clickProgress(e) {
            this.isTimerPlaying = true;
            this.audio.pause();
            this.updateBar(e.pageX);
        },
        prevMicroA() {
            this.transitionName = "scale-in";
            this.isShowCover = false;
            if (this.currentMicroAIndex > 0) {
                this.currentMicroAIndex--;
            } else {
                this.currentMicroAIndex = this.microAs.length - 1;
            }
            this.currentMicroA = this.microAs[this.currentMicroAIndex];
            this.resetmicro_app();
        },
        nextMicroA() {
            this.transitionName = "scale-out";
            this.isShowCover = false;
            if (this.currentMicroAIndex < this.microAs.length - 1) {
                this.currentMicroAIndex++;
            } else {
                this.currentMicroAIndex = 0;
            }
            this.currentMicroA = this.microAs[this.currentMicroAIndex];
            this.resetmicro_app();
        },
        resetmicro_app() {
            this.barWidth = 0;
            this.circleLeft = 0;
            this.audio.currentTime = 0;
            this.audio.src = this.currentMicroA.source;
            setTimeout(() => {
                if (this.isTimerPlaying) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
            }, 300);
        },
        favorite() {
            this.microAs[this.currentMicroAIndex].favorited = !this.microAs[
                this.currentMicroAIndex
            ].favorited;
        }
    },
    created() {
        let vm = this;
        this.currentMicroA = this.microAs[0];
        this.audio = new Audio();
        this.audio.src = this.currentMicroA.source;
        this.audio.ontimeupdate = function() {
            vm.generateTime();
        };
        this.audio.onloadedmetadata = function() {
            vm.generateTime();
        };
        this.audio.onended = function() {
            vm.nextMicroA();
            this.isTimerPlaying = true;
        };

        // this is optional (for preload covers)
        for (let index = 0; index < this.microAs.length; index++) {
            const element = this.microAs[index];
            let link = document.createElement('link');
            link.rel = "prefetch";
            link.href = element.cover;
            link.as = "image"
            document.head.appendChild(link)
        }
    }
});