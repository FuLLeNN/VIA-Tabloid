package com.example.viatabloid.Services;

import com.example.viatabloid.Models.Story;

import java.util.List;

public interface StoryService {
    Story findStoryById(Long id);
    Story saveStory(Story story);
    Story updateStory(Story story);
    void deleteStoryById(Long id);
    List<Story> getAll();
}
