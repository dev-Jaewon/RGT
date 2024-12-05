import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MainHeader } from "./index";

describe("MainHeader", () => {
  const mockSetFilter = jest.fn();
  const defaultFilter = {
    page: 1,
    size: 10,
    title: "",
    author: "",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders title and author input fields", () => {
    render(<MainHeader filter={defaultFilter} setFilter={mockSetFilter} />);

    expect(screen.getByText("제목")).toBeInTheDocument();
    expect(screen.getByText("저자")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("책 제목을 입력하세요")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("저자명을 입력하세요")
    ).toBeInTheDocument();
  });

  it("calls setFilter with debounced title input", async () => {
    render(<MainHeader filter={defaultFilter} setFilter={mockSetFilter} />);

    const titleInput = screen.getByPlaceholderText("책 제목을 입력하세요");
    fireEvent.change(titleInput, { target: { value: "테스트 제목" } });

    await waitFor(
      () => {
        expect(mockSetFilter).toHaveBeenCalledWith({
          ...defaultFilter,
          title: "테스트 제목",
        });
      },
      { timeout: 400 }
    );
  });

  it("calls setFilter with debounced author input", async () => {
    render(<MainHeader filter={defaultFilter} setFilter={mockSetFilter} />);

    const authorInput = screen.getByPlaceholderText("저자명을 입력하세요");
    fireEvent.change(authorInput, { target: { value: "테스트 저자" } });

    await waitFor(
      () => {
        expect(mockSetFilter).toHaveBeenCalledWith({
          ...defaultFilter,
          author: "테스트 저자",
        });
      },
      { timeout: 400 }
    );
  });
});
