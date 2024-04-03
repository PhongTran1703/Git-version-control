# Astronomy Picture of the Day Project

This project is a web application that displays the Astronomy Picture of the Day. The team is working on implementing an advanced branching strategy using Gitflow.

## Team Members

- Team Member 1: [Rishu Kumar]
- Team Member 2: [Phong Tran]
- Team Member 3: [Razib Hasan]

## Task 1: Implement an Advanced Branching Strategy

### Team Member 1 Responsibilities:

#### Step 1: Create a Feature Branch for Image Enhancements


# Start a new feature branch
git flow feature start image-enhancements

#### Step 2: Implement Improvements and Commit Changes
Make necessary improvements to the image handling/display and commit the changes.


git add .
git commit -m "Implement image enhancements"


#### Step 3: Merge Feature Branch to Develop


# Finish the feature and merge to develop
git flow feature finish image-enhancements


### Team Member 2 Responsibilities:

#### Step 4: Create a Release Branch for Version 1.0.0

# Start a new release branch
git flow release start 1.0.0


#### Step 5: Simulate Bug Fixes or Last-Minute Features
Simulate bug fixes or add last-minute features for the upcoming release and commit the changes.

git add .
git commit -m "Fix bugs and add features for release 1.0.0"


#### Step 6: Merge Release Branch to Main and Tag the Release

# Finish the release and merge to main
git flow release finish 1.0.0