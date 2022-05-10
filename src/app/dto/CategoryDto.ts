export class CategoryDto {

  id: number | undefined;
  name: string | undefined;
  description: string | undefined;
  organization_id: number | undefined;


  constructor(id: number | undefined, name: string | undefined, description: string | undefined, organization_id: number | undefined) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.organization_id = organization_id;
  }


}
