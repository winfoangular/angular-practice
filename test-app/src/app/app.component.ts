import { Component } from '@angular/core';
import { AppService } from './app.service';
import { delay } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  id: number;
  name: String;
  dept: String;
  obj = [];
  tableValidation = false;
  deleteValidation = false;
  submitValidation = false;

  GetFailure = false
  PostFailure = false
  DeleteFailure = false

  constructor(private appservice: AppService)
   { 
     console.log("this is constructor of component.ts")
   }
  submitInfo() {
    var body = {
      "id": this.id,
      "name": this.name,
      "dept": this.dept
    }
    this.appservice.submitData(body).subscribe((Response: any) => {
      setTimeout(() => {
        this.deleteValidation = false;
        this.tableValidation = false;
        this.submitValidation = true;

        this.GetFailure = false
        this.PostFailure = false
        this.DeleteFailure = false
      },200
      );
    }, error => this.handlePostError(error)
    )
  }

  getInfo() {
    this.submitValidation = false;
    this.deleteValidation = false;
    this.appservice.getData().subscribe(Response => this.handleGetResponse(Response), error => this.handleGetError(error));
    console.log(this.id)
  }

  delete() {
   //alert("Do you want to delete?");
    console.log(this.id)
    var id = this.id;
    this.appservice.deleteData(id).subscribe((Response: any) => {

      setTimeout(() => {
        console.log("this is delete request")
        this.tableValidation = false;
        this.deleteValidation = true;
        this.submitValidation = false;
        this.GetFailure = false
        this.PostFailure = false
        this.DeleteFailure = false
      }, 200);

    }, error => this.handleDeleteError(error))
  }

   handleDeleteError(error) {
    console.log("this is handle Delete Error")
    this.tableValidation = false;
    this.deleteValidation = false;
    this.submitValidation = false;
    this.GetFailure = false;
    this.PostFailure = false
    this.DeleteFailure = true
  }
  handleGetError(error) {
    this.tableValidation = false;
    this.DeleteFailure = false
    this.GetFailure = true
    this.PostFailure = false
    this.deleteValidation = false;
    this.submitValidation = false;
  }
  handlePostError(error) {
  
    this.DeleteFailure = false
    this.GetFailure = false
    this.PostFailure = true
    this.deleteValidation = false;
    this.submitValidation = false;
    this.tableValidation = false;
  }
  handleGetResponse(Response) {
    setTimeout(() => {
      console.log("set timeout method")
      this.obj = Response;
      this.tableValidation = true;
      this.GetFailure = false
      this.PostFailure = false
      this.DeleteFailure = false
    }, 200);

  }
  f1()
  {
    console.log("hai")
    // window.location.reload(true);
    document.getElementById("myForm")
  }
}


