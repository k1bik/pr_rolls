class HomeController < ApplicationController
  def index
    feedback_request = FeedbackRequest.new(consent: false)

    render "home/index", locals: { feedback_request: }
  end
end
