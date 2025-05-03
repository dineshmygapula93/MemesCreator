import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MemesCreator';

  firstmem:String="";
  secondmem:String="";
  thirdmem:String="";
  fourthmem:String="";
  fifthmem:String="";
  value:String="";
 onUpdatebackground(imgurl:String){
  document.documentElement.style.setProperty('--bg-image',`url(${imgurl})`);
 }
}
