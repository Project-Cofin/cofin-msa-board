package shop.cofin.board.QnA.service;

import org.springframework.beans.factory.annotation.Autowired;
import shop.cofin.board.QnA.domain.QnADto;
import shop.cofin.board.QnA.repository.QnARepository;

import java.util.HashMap;
import java.util.List;

public class QnAServiceImpl implements QnAService{
    @Autowired
    private QnARepository qnaRepository;

    @Override
    public void write(QnADto qna) {

    }

    @Override
    public void modify(QnADto qna) {

    }

    @Override
    public void remove(int num) {

    }

    @Override
    public QnADto getQnA(int num) {
        return null;
    }

    @Override
    public List<QnADto> getQnAList() {
        return null;
    }

    @Override
    public List<QnADto> getQnASearchList(HashMap<String, Object> params) {
        return null;
    }
}
