import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from "@emailjs/browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

form: FormGroup = this.fb.group({
from_name: '',
to_name: '',
from_email: '',
subject: '',
message: '',
});
constructor(private fb: FormBuilder) {}

async send() {
emailjs.init('btNNSaY-ylEHvCNC3');
let response = await emailjs.send("service_diet","template_fe3ov6a",{
 from_name: this.form.value.from_name,
 to_name: this.form.value.to_name,
 from_email: this.form.value.from_email,
 subject: this.form.value.subject,
 message: this.form.value.message,
 });
alert('Message has been sent.');
this.form.reset();
}

}

