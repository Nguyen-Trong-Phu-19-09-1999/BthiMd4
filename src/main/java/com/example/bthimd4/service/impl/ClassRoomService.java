package com.example.bthimd4.service.impl;


import com.example.bthimd4.model.ClassRoom;
import com.example.bthimd4.repository.ClassRoomRepository;
import com.example.bthimd4.service.IClassRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ClassRoomService implements IClassRoomService {
    @Autowired
    private ClassRoomRepository classRoomRepository;

    @Override
    public List<ClassRoom> findAll() {
        return classRoomRepository.findAll();
    }

    @Override
    public Optional<ClassRoom> findById(Long id) {
        return classRoomRepository.findById(id);
    }

    @Override
    public void save(ClassRoom classRoom) {
classRoomRepository.save(classRoom);
    }

    @Override
    public void delete(Long id) {
classRoomRepository.deleteById(id);
    }
}
