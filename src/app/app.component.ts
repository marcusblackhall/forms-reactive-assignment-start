import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

  projectForm:FormGroup;

  statuses: string[] = [
    'Stable',
    'Critical',
    'Finished'
  ];

  ngOnInit(): void {
    this.projectForm = new FormGroup(
        {
            projectName: new FormControl(null,null,this.excludeProjectNameAsyn),
            email: new FormControl(),
            projectStatus: new FormControl()


        }

    );
  }

  excludeProjectName(control:FormControl) :{[s:string]: boolean}{

      if (control.value === 'Test'){
          return {"nameExcluded" : true};
      }

      return null;

  }

  excludeProjectNameAsyn(control:FormControl) : Promise<any> | Observable<any> {

   const nameRetrieve = new Promise<any>(
    (resolve,error) => {
        if (control.value === "Test"){
          resolve({"nameExcluded": true});
        } else {
          resolve(null);
        }
    }

   );
    return nameRetrieve;
}

  onSubmit(){
      console.log(this.projectForm);

  }

}
