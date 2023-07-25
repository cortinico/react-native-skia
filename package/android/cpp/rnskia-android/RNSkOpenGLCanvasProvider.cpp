#include <RNSkOpenGLCanvasProvider.h>

#include <memory>

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdocumentation"

#include "SkCanvas.h"
#include "SkSurface.h"

#pragma clang diagnostic pop

namespace RNSkia {

RNSkOpenGLCanvasProvider::RNSkOpenGLCanvasProvider(
    std::function<void()> requestRedraw,
    std::shared_ptr<RNSkia::RNSkPlatformContext> context)
    : RNSkCanvasProvider(requestRedraw), _context(context) {}

RNSkOpenGLCanvasProvider::~RNSkOpenGLCanvasProvider() {}

float RNSkOpenGLCanvasProvider::getScaledWidth() { return _width; }

float RNSkOpenGLCanvasProvider::getScaledHeight() { return _height; }

bool RNSkOpenGLCanvasProvider::renderToCanvas(
    const std::function<void(SkCanvas *)> &cb) {
  if (_renderer != nullptr) {
    return _renderer->render(cb, _width, _height);
  }
  return false;
}

void RNSkOpenGLCanvasProvider::surfaceAvailable(jobject surface, int width,
                                                int height) {
  _width = width;
  _height = height;

  if (_renderer == nullptr) {
    // Create renderer!
    _renderer = std::make_unique<SkiaOpenGLRenderer>(surface);

    // Redraw
    _requestRedraw();
  }
}
void RNSkOpenGLCanvasProvider::surfaceDestroyed() {
  if (_renderer != nullptr) {
    // destroy the renderer (a unique pointer so the dtor will be called
    // immediately.)
    _renderer = nullptr;
  }
}

void RNSkOpenGLCanvasProvider::surfaceSizeChanged(int width, int height) {
  if (width == 0 && height == 0) {
    // Setting width/height to zero is nothing we need to care about when
    // it comes to invalidating the surface.
    return;
  }
  _width = width;
  _height = height;

  // Redraw after size change
  _requestRedraw();
}
} // namespace RNSkia
