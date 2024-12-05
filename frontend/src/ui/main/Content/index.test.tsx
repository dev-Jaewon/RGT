import { render, screen, fireEvent } from "@testing-library/react";
import { Content } from "./index";

const mockRouter = {
  push: jest.fn(),
};

jest.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
}));

describe("Content", () => {
  const mockBooks = [
    {
      id: 1,
      title: "테스트 책",
      author: "테스트 저자",
      quantity: 1,
      image: "test.jpg",
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shows loading message when isLoading is true", () => {
    render(<Content data={undefined} isLoading={true} />);
    expect(screen.getByText("로딩중...")).toBeInTheDocument();
  });

  it("shows no data message when data is empty", () => {
    render(<Content data={[]} isLoading={false} />);
    expect(screen.getByText("데이터가 없습니다.")).toBeInTheDocument();
  });

  it("renders book list correctly", () => {
    render(<Content data={mockBooks} isLoading={false} />);

    expect(screen.getByText("테스트 책")).toBeInTheDocument();
    expect(screen.getByText("저자 : 테스트 저자")).toBeInTheDocument();

    const image = screen.getByAltText("테스트 책");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test.jpg");
  });

  it("navigates to book detail page when clicking a book", () => {
    render(<Content data={mockBooks} isLoading={false} />);

    const bookElement = screen.getByText("테스트 책").closest("div");
    fireEvent.click(bookElement as HTMLDivElement);

    expect(mockRouter.push).toHaveBeenCalled;
  });
});
