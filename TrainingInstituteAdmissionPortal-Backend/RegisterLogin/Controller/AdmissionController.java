package com.springapp.RegisterLogin.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springapp.RegisterLogin.Model.Admission;
import com.springapp.RegisterLogin.Service.AdmissionService;

@RestController
@RequestMapping("/api")
public class AdmissionController {

    @Autowired
    private AdmissionService admissionService;

    @PostMapping("/admission")
    public ResponseEntity<?> submitAdmissionForm(@RequestBody Admission admission) 
    {
        // Additional validation and business logic can be added here
        Admission savedAdmission = admissionService.saveAdmission(admission);
        return ResponseEntity.ok(savedAdmission);
    }
}
