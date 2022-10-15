import { Injector } from "@angular/core";
import { AbstractControl, FormControl, ValidatorFn } from "@angular/forms"
import { Observable } from "rxjs";
import { AuthService } from "src/app/shared/services/auth.service";
export class MyValidators{




  //Synchronous validators
  static PasswordConfirmed(controlName: string, matchingControlName: string): ValidatorFn{
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const matchingControl = controls.get(matchingControlName);
      if (matchingControl.errors && !matchingControl.errors['confirmThePassword']) {
        return null;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({  'confirmThePassword': true });
        return {'confirmThePassword': true}
      } else {
        matchingControl.setErrors(null);
        return null;
      }
    }
  }
  // Asynchronous validators
  //   public LoginMatch(control: FormControl): Observable<any>{
  //   return  this.auth.getUsers().subscribe((response) => {
  //     let userWithThisName = response.find((user) => {
  //        user.accName == this.accName
  //     })
  //     if(control.value === userWithThisName){
  //      return {'matchLogin': true}
  //     } else{
  //       return null
  //     }
  //   })
  // }


//   public static LoginMatch(authService: AuthService) {
//     return function (control: FormControl): Promise<any> | Observable<any> {

//     const promise = new Promise<any>((resolve) => {
//         authService.getUsers()
//           .subscribe((response) => {
//             let userWithThisName = response.find((user) => {
//               return user.accName == control.value.toString()
//             })
//             if (userWithThisName) {
//               resolve({ 'loginMatch': true });
//             }
//             else {
//               console.log("data == true");
//               resolve(null);
//             }
//           }),
//       );
//       return promise;
//     }
// }

static LoginMatch(authService: AuthService){
  return function (control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve) => {
      authService.getUsers().subscribe((responseObj) => {
        let response = (Object.values(responseObj))
        let userWithThisName = response.find((user) => {
          return user.accName == control.value.toString()
        })
        if(userWithThisName){
          resolve({ 'loginMatch': true });
        } else{
          resolve(null)
        }
      })
    })
  }
}
}
