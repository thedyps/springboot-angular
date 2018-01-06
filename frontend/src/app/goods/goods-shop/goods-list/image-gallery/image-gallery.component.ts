import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Activate Carousel
    $("#mainImgSlide").carousel({interval: 1000});

    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#mainImgSlide").carousel(0);
    });
    $(".item2").click(function(){
      $("#mainImgSlide").carousel(1);
    });
    $(".item3").click(function(){
      $("#mainImgSlide").carousel(2);
    });

    // Enable Carousel Controls
    $(".left").click(function(){
      $("#mainImgSlide").carousel("prev");
    });
    $(".right").click(function(){
      $("#mainImgSlide").carousel("next");
    });
  }

}
