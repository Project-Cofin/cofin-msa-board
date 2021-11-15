package shop.cofin.board.QnA.repository;

import org.springframework.stereotype.Repository;
import shop.cofin.board.QnA.domain.QnADto;

import java.util.HashMap;
import java.util.List;

@Repository("QnARepository")
public interface QnARepository {
    public void insertBoard (QnADto QnA);
    public void updateBoard (QnADto QnA);
    public void deleteBoard (int num);
    public QnADto selectOneBoard (int num);
    public List<QnADto> selectSearchBoard (HashMap<String, Object> params);
    public List<QnADto> selectAllBoard();
}
