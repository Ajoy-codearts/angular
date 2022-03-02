import { Component, OnInit } from "@angular/core";

@Component({
    selector:"app-body",
    templateUrl:"body.component.html",
    styleUrls:["body.component.scss"]
})

export class BodyComponent implements OnInit{
    word:string="hello world";
    text:string="fdhdf";
    textValue:boolean=false;
    value:boolean= true;
    data=[{
        name:"ajoy biswas",
        roll: 12,
        address:"bamangachhi"
    },
    {
        name:"sudip roy",
        roll:56,
        address:"barasat"
    },
    {
        name:"pritam dhar",
        roll:28,
        address:"dum dum"
    }
]

    ngOnInit(): void {
        
    }
    press(){
        this.textValue=!this.textValue;
    }
    pressit(){
        this.value=!this.value;
    }
}