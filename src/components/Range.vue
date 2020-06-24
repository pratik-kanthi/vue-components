<template>
    <div class="range-wrapper">
        <div class="range-slider">
            <input :min="min" :max="max" v-model="range[0]" type="range" @input="lowerSliderInput">
            <input :min="min" :max="max" v-model="range[1]" type="range" @input="upperSliderInput" v-if="range.length>1">
            <span class="left">{{ range[0] }}</span>
            <span class="right">{{ range[1] }}</span>
        </div>
    </div>
</template>

<script>
let sheet = document.createElement('style');
let prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];
document.body.appendChild(sheet);

export default {
    name: 'Range',
    props: {
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        },
        steps: {
            type: Number,
            default: 1
        },
        range: {
            type: Array,
            required: true
        },
        trackBg:{
            type: Array,
            default: function () { return ['#B5B5BE','#0B58D4']; }
        }
    },
    methods: {
        upperSliderInput() {
            this.range[0]=parseInt(this.range[0]);
            this.range[1]=parseInt(this.range[1]);
            if (this.range[1] <=this.range[0]) {
                this.range[0] =this.range[1];
            }
            sheet.textContent = this.getTrackStyle();        

        },
        lowerSliderInput() { 
            if(this.range.length>1){  
                this.range[0]=parseInt(this.range[0]);
                this.range[1]=parseInt(this.range[1]);
                if (this.range[0] >= this.range[1] ) {
                    this.range[1]= this.range[0];
                }  
            }
            sheet.textContent = this.getTrackStyle();        
        },
        getTrackStyle(){
            let style = '';
            if(this.range.length>1){
                for (var i = 0; i < prefs.length; i++) {
                    style += '.range-slider input::-' + prefs[i] + '{background: linear-gradient(to right, '+this.trackBg[0]+' 0%, '+this.trackBg[0]+' ' + (this.range[0]/this.max*100) + '%,'+this.trackBg[1]+ ' '+(this.range[0]/this.max*100) + '%, '+this.trackBg[1]+ ' '+ (this.range[1]/this.max*100) + '%,'+this.trackBg[0]+' ' + (this.range[1]/this.max*100) + '%, '+this.trackBg[0]+' 100%)}';
                }
            }else{
                for (var i = 0; i < prefs.length; i++) {
                    style += '.range-slider input::-' + prefs[i] + '{background: linear-gradient(to right, '+this.trackBg[1]+' 0%, '+this.trackBg[1]+' ' + (this.range[0]/this.max*100) + '%,'+this.trackBg[0]+ ' '+(this.range[0]/this.max*100) + '%, '+this.trackBg[0]+' 100%)}';
                }
            }
            return style;
        }
    },
    mounted () {
        sheet.textContent = this.getTrackStyle();       
    },
};
</script>
