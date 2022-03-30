const Hobby = Vue.component("hobby",
    {
        props: ['h','n'],
        template: '<div class="hobby" align = "center"> <div class = "row"> <div class = "col-12"><br>{{ n }} likes to {{ h }}</div> </div></div>'
    }
);