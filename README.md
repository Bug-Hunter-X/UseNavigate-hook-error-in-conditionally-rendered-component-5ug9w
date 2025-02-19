# React Router v6 useNavigate Hook Error in Conditionally Rendered Component

This repository demonstrates a common error encountered when using the `useNavigate` hook from `react-router-dom` v6 within a conditionally rendered component.  The issue arises because the hook needs to be within a component that's part of the React Router's context, which might not be the case if the component is initially not rendered.  The provided solution showcases a robust way to handle this situation.

## Problem
The `useNavigate` hook throws an error if the component where it's used isn't rendered during the initial render cycle due to conditional rendering. 

## Solution
The solution involves ensuring the component containing `useNavigate` is always rendered.  We can achieve this by using a functional component to wrap our conditional logic, thereby ensuring that the hook remains within the React Router context.