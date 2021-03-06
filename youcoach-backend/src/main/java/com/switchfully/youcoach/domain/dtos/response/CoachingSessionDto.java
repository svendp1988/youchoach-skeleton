package com.switchfully.youcoach.domain.dtos.response;

import com.switchfully.youcoach.datastore.Status;

import java.time.LocalDateTime;
import java.util.Objects;

public class CoachingSessionDto {
    private long id;
    private String subject;
    private String date;
    private String time;
    private String location;
    private String remarks;
    private Person coach;
    private Person coachee;
    private Status status;


    public CoachingSessionDto() {
    }

    public CoachingSessionDto(long id, String subject, String date, String time, String location, String remarks, Person coach, Person coachee, Status status) {
        this.id = id;
        this.subject = subject;
        this.date = date;
        this.time = time;
        this.location = location;
        this.remarks = remarks;
        this.coach = coach;
        this.coachee = coachee;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public String getSubject() {
        return subject;
    }

    public String getLocation() {
        return location;
    }

    public String getRemarks() {
        return remarks;
    }

    public Person getCoach() {
        return coach;
    }

    public Person getCoachee() {
        return coachee;
    }

    public Status getStatus() {
        return status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CoachingSessionDto that = (CoachingSessionDto) o;
        return id == that.id &&
                Objects.equals(subject, that.subject) &&
                Objects.equals(date, that.date) &&
                Objects.equals(time, that.time) &&
                Objects.equals(location, that.location) &&
                Objects.equals(remarks, that.remarks) &&
                Objects.equals(coach, that.coach) &&
                Objects.equals(coachee, that.coachee) &&
                status == that.status;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, subject, date, time, location, remarks, coach, coachee);
    }

    public String getTime() {
        return time;
    }

    public String getDate() {
        return date;
    }

    public static class Person {
        private Long id;
        private String name;

        public Person() {
        }

        public Person(Long id, String name) {
            this.id = id;
            this.name = name;
        }

        public Long getId() {
            return id;
        }

        public String getName() {
            return name;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Person person = (Person) o;
            return Objects.equals(id, person.id) &&
                    Objects.equals(name, person.name);
        }

        @Override
        public int hashCode() {
            return Objects.hash(id, name);
        }
    }
}
