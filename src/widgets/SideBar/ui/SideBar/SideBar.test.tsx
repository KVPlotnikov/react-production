import {fireEvent, render, screen} from "@testing-library/react";
import {Sidebar} from "./SideBar";
import {withTranslation} from "react-i18next";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe('Sidebar', () => {
  test('test render', () => {
    renderWithTranslation(<Sidebar/>)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  });
  test('test render', () => {
    renderWithTranslation(<Sidebar/>)
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId("sidebar")).toHaveClass('collapsed')
  });
})