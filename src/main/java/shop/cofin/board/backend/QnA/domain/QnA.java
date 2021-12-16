package shop.cofin.board.backend.QnA.domain;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "QnA")
@DynamicInsert
@DynamicUpdate

public class QnA {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer no;

    @Column(name = "type")
    private String type;

    @Column(name = "title")
    private String title;

    @Column(name = "contents")
    private String contents;

    @Column(name = "QnA_no")
    private Integer memberNo;

    @Column(name = "created_time")
    private Date createdTime;

    @Column(name = "updated_time")
    private Date updatedTime;

    @Column(name = "likes")
    private Integer likes;

    @Column(name = "counts")
    private Integer counts;
    @javax.persistence.Id
    private Long id;


}
