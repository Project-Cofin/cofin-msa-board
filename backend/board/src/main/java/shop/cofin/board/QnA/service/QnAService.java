package shop.cofin.board.QnA.service;
import shop.cofin.board.QnA.domain.QnADto;

import java.util.HashMap;
import java.util.List;

public interface QnAService {
    public void write (QnADto qna);
    public void modify (QnADto qna);
    public void remove (int num);
    public QnADto getQnA (int num);
    public List<QnADto> getQnAList();

    public List<QnADto> getQnASearchList(HashMap<String, Object> params);
}
