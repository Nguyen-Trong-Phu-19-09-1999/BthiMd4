package com.example.bthimd4.repository;


import com.example.bthimd4.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student,Long> {
    @Query(value = "select * from student order by age DESC", nativeQuery = true)
    List<Student> sortIncreasing();

    @Query(value = "select * from student order by age ASC", nativeQuery = true)
    List<Student> sortDecreasing ();
}
