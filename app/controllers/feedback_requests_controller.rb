class FeedbackRequestsController < ApplicationController
  def create
    permitted_params = params.permit(:name, :phone, :email, :comment, :consent)
    feedback_request = FeedbackRequest.new(permitted_params)

    if feedback_request.valid?
      feedback_request.save
    else
      render turbo_stream: turbo_stream.update("feedback-request-form", partial: "feedback_requests/form", locals: { feedback_request: })
    end
  end
end
