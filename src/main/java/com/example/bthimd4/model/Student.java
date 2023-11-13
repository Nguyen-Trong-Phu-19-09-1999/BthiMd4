package com.example.bthimd4.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String number;
    private Long salary;
    private int age;
    @ManyToOne
    private ClassRoom classRoom;
}
