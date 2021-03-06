package com.switchfully.youcoach.domain.dtos.embedded;

import com.switchfully.youcoach.datastore.entities.CoachingTopic;
import com.switchfully.youcoach.datastore.entities.Grade;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class CoachListingEntryDto {

    private long id;
    private String firstName;
    private String lastName;
    private List<CoachingTopicDto> topics = new ArrayList<>();
    private String photoUrl;
    private String email;

    public CoachListingEntryDto withId(long id){
        this.id = id;
        return this;
    }

    public CoachListingEntryDto withUrl(String photoUrl) {
        this.photoUrl = photoUrl;
        return this;
    }

    public CoachListingEntryDto withEmail(String email) {
        this.email = email;
        return this;
    }

    public CoachListingEntryDto withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public CoachListingEntryDto withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public CoachListingEntryDto withCoachingTopics(List<CoachingTopic> topics){
        this.topics.clear();
        for(CoachingTopic topic: topics){
            this.topics.add(new CoachingTopicDto(topic.getTopic().getName(),
                    topic.getGrades()
                            .stream()
                            .map(Grade::ordinal)
                            .collect(Collectors.toList())
            ));
        }
        return this;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public long getId() {
        return id;
    }

    public List<CoachingTopicDto> getTopics() {
        return topics;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CoachListingEntryDto that = (CoachListingEntryDto) o;
        return Objects.equals(firstName, that.firstName) &&
                Objects.equals(lastName, that.lastName) &&
                Objects.equals(topics, that.topics) &&
                Objects.equals(photoUrl, that.photoUrl) &&
                Objects.equals(email, that.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(firstName, lastName, topics, photoUrl, email);
    }
}
