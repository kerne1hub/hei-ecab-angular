import { UserRole } from '@shared/user-role';

export class PublicSignUpConfirmPageForm {
  public firstName: string;
  public lastName: string;
  public patronymic: string;
  public dayOfBirth: number;
  public monthOfBirth: number;
  public yearOfBirth: number;
  public seriesOfDocument: number;
  public numberOfDocument: number;
  public role: UserRole;
  public agreement: boolean;
}
