package org.example.dto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@NoArgsConstructor
@Getter
@Setter
public class AddPlayerDTO {
    private String name;
    private String lastname;
    private String email;
    private String personalid;
    private String startingdate;
}