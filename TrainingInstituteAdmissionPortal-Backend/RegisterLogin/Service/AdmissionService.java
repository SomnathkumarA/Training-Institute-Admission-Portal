package com.springapp.RegisterLogin.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springapp.RegisterLogin.Model.Admission;
import com.springapp.RegisterLogin.Repository.AdmissionRepository;

@Service
public class AdmissionService {

    @Autowired
    private AdmissionRepository admissionRepository;

    public Admission saveAdmission(Admission admission) {
        return admissionRepository.save(admission);
    }
}
