import {Directive, Input} from "@angular/core";
import {NG_VALIDATORS, Validator, FormControl} from "@angular/forms";

@Directive({
    selector: "[requireFile]",
    providers: [
        { provide: NG_VALIDATORS, useExisting: FileValidator, multi: true },
    ]
})
export class FileValidator implements Validator {
    @Input() maxFileSize:any;
    static validate(c: FormControl, maxFileSize): {[key: string]: any} {
      return c.value[0].size>maxFileSize*1048576 ? { "required" : true} : null;
    }

    validate(c: FormControl): {[key: string]: any} {
      return FileValidator.validate(c, this.maxFileSize);
    }
}