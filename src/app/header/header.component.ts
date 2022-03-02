import { Component, OnInit } from "@angular/core";

@Component({
    selector:"app-header",
    templateUrl:"header.component.html",
    styleUrls:["header.component.scss"]
    
})

export class HeaderComponent implements OnInit{
    Value:boolean=false;
    menu=[
        {
            menuname: 'HOME',
            menulink: '/home'
        },
        {
            menuname: 'ABOUT US',
            menulink: '/about-us'
        },
        {
            menuname:'SERVICE',
            menulink:'/service'
        },
        {
            menuname:'PROJECT',
            menulink:'/project'
        },
        {
            menuname:'GALLERY',
            menulink:'/gallery'
        },
        {
            menuname:'FAQ',
            menulink:'/faq'
        },
        {
            menuname:'CONTACT',
            menulink:'/contact'
        }
    ]
    showMenufnc(){
        this.Value=!this.Value;
    }
    ngOnInit(): void {
        
    }
}