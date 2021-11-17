package shop.cofin.board.backend.QnA.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import shop.cofin.board.backend.QnA.domain.QnA;
import shop.cofin.board.backend.QnA.repository.QnARepository;

import java.util.List;

@Service
public class QnAService {
    @Autowired
    private QnARepository qnaRepository;

    public static List<QnA> getAllQnA() {
        return null;
    }


}
