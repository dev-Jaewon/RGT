import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'books',
})
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, nullable: false })
  title: string;

  @Column({ length: 255, nullable: false })
  author: string;

  @Column('int', { default: 0, nullable: false })
  quantity: number;

  @Column('text', { nullable: true })
  image: string;
}
