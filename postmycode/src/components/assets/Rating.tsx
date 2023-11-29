"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { updateCodeBlockRating } from "../actions/codeblockActions";

const Container = styled.div`
  display: flex;
`;
const Radio = styled.input`
  display: none;
`;
const Rating = styled.div`
  cursor: pointer;
  & :hover {
    color: rgb(0, 0, 0) !important;
  }
`;

interface RateProps {
  id: number | undefined;
  rating: number | undefined;
  notify: (show: boolean) => void;
}

const Rate = ({ id, rating, notify }: RateProps) => {
  const [rate, setRate] = useState(rating || 0);
  return (
    <Container>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <label key={index}>
            <Radio
              type="radio"
              value={item}
              onClick={(e) => {
                updateCodeBlockRating(id, item);
                setRate(item);
                notify(true);
              }}
            />
            <Rating>
              <FaStar
                color={
                  item < rate || item === rate
                    ? "rgb(0,0,0)"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};

export default Rate;
