import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Facilities' })
export class Facilities {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public facilityCode: string;

  @Column()
  public DHIS2OrganizationalUnitCode: string;

  @Column()
  public openLMISFaciliyCode: string;

  @Column()
  public createdAt: Date;

  @Column()
  public updatedAt: Date;
}
