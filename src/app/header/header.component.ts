import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isMobileView = false;
  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isMobileView = !this.isMobileView;
  }
}
