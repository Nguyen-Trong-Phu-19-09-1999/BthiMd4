package com.example.bthimd4.service.impl;


import com.example.bthimd4.model.Student;
import com.example.bthimd4.repository.StudentRepository;
import com.example.bthimd4.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.Optional;
@Service
public class StudentService implements IStudentService {
    @Autowired
   private StudentRepository studentRepository;
    @Override
    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    @Override
    public Optional<Student> findById(Long id) {
        return studentRepository.findById(id);
    }

    @Override
    public void save(Student student) {
studentRepository.save(student);
    }

    @Override
    public void delete(Long id) {
studentRepository.deleteById(id);
    }




}
