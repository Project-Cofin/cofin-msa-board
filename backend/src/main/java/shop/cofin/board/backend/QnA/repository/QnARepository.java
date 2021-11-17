package shop.cofin.board.backend.QnA.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import shop.cofin.board.backend.QnA.domain.QnA;


public interface QnARepository extends JpaRepository<QnA, Integer> {

}
