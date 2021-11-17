package shop.cofin.board.backend.QnA.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import shop.cofin.board.backend.QnA.domain.QnA;
import shop.cofin.board.backend.QnA.service.QnAService;


import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class QnAController {
    @Autowired
    private QnAService qnaService;

    @GetMapping("/QnA")
    public List<QnA> getAllQnAs(){

        return QnAService.getAllQnA();
    }


}
