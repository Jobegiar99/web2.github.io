const Tour = Vue.component("tour",
    {
        props: ['p','s'],
        template: '<div class="tour" align = "center"> <div class = "row"> <div class = "col-12"><br>{{s}} wants to visit {{p}}</div> </div></div>'
    }
);